from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import userInfo
from .serializers import userInfoSerializer

# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def userinformation(request):
    print(
    'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'GET':
        user_info = userInfo.objects.all()
        serializer = userInfoSerializer(user_info, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = userInfoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


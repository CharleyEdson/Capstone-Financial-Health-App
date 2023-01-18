from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import netWorth
from .serializers import netWorthSerializer
from netWorth.models import netWorth
from netWorth.serializers import netWorthSerializer
from django.shortcuts import get_object_or_404


# Create your views here.
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def networthinfo(request):
    print(
    'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'GET':
        assets = netWorth.objects.filter(user_id=request.user.id)
        serializer = netWorthSerializer(assets, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = netWorthSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE', 'PATCH'])
@permission_classes([IsAuthenticated])
def edit_networth(request,pk):
    networth = get_object_or_404(netWorth,pk=pk)
    if request.method == 'PUT':
        serializer = netWorthSerializer(asset, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'PATCH':
        serializer = netWorthSerializer(networth, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        networth.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
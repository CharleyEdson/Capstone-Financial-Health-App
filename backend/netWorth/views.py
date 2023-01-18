from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import netWorth
from .serializers import netWorthSerializer
from netWorth.models import netWorth
from Asset.serializers import AssetSerializer
from django.shortcuts import get_object_or_404
from authentication.models import User
from Asset.models import Asset
from Liability.models import Liability


# Create your views here.
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def calculate_net_worth(request):
    print(
    'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'GET':
        cash = Asset.objects.filter(user_id=request.user.id).filter(asset_type='Cash').order_by('-date')
        cashes = []
        for obj in cash:
            cashes.append(obj.value)
        cash_networth = cashes[0]
        real_estate = Asset.objects.filter(user_id=request.user.id).filter(asset_type='Real Estate').order_by('-date')
        real_estates = []
        for obj_R in real_estate:
            real_estates.append(obj_R.value)
        real_estate_networth = real_estates[0]
        brokerage = Asset.objects.filter(user_id=request.user.id).filter(asset_type='Brokerage').order_by('-date')
        brokerages = []
        for obj_B in brokerage:
            brokerages.append(obj_B.value)
        brokerage_networth = brokerages[0]
        retirement = Asset.objects.filter(user_id=request.user.id).filter(asset_type='Retirement').order_by('-date')
        retirements = []
        for obj_Ret in retirement:
            retirements.append(obj_Ret.value)
        retirement_networth = retirements[0]
        misc = Asset.objects.filter(user_id=request.user.id).filter(asset_type='Misc').order_by('-date')
        miscs = []
        for obj_M in misc:
            miscs.append(obj_M.value)
        misc_networth = miscs[0]
        total_assets = int(cash_networth) + int(real_estate_networth) + int(brokerage_networth) + int(retirement_networth) + int(misc_networth) 
        
        mortgage = Liability.objects.filter(user_id=request.user.id).filter(type_of_liability='Mortgage').order_by('-date')
        mortgages = []
        for obj_Mort in mortgage:
            mortgages.append(obj_Mort.value)
        mortgage_networth = mortgages[0]
        auto_loan = Liability.objects.filter(user_id=request.user.id).filter(type_of_liability='Auto Loan').order_by('-date')
        auto_loans = []
        for obj_auto in auto_loan:
            auto_loans.append(obj_auto.value)
        auto_loan_networth = auto_loans[0]
        student_loan = Liability.objects.filter(user_id=request.user.id).filter(type_of_liability='Student Loan').order_by('-date')
        student_loans = []
        for obj_student in student_loan:
            student_loans.append(obj_student.value)
        student_loan_networth = student_loans[0]
        cc_loan = Liability.objects.filter(user_id=request.user.id).filter(type_of_liability='Credit Card Loan').order_by('-date')
        cc_loans = []
        for obj_cc in cc_loan:
            cc_loans.append(obj_cc.value)
        cc_loan_networth = cc_loans[0]
        misc_loan = Liability.objects.filter(user_id=request.user.id).filter(type_of_liability='Misc').order_by('-date')
        misc_loans = []
        for obj_miscl in misc_loan:
            misc_loans.append(obj_miscl.value)
        misc_loan_networth = misc_loans[0]
        total_liabilities = int(mortgage_networth) + int(auto_loan_networth) + int(student_loan_networth) + int(cc_loan_networth) + int(misc_loan_networth)
        total_net_worth = total_assets - total_liabilities
        print(total_assets)
        print(total_liabilities)
        new_net_worth = netWorth.objects.create(user=request.user, netWorth=total_net_worth, asset_total=total_assets, liabilities_total=total_liabilities, date='2023-01-01')
        serializer = AssetSerializer(real_estate, many=True)
        return Response(serializer.data)

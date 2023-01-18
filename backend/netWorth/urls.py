from django.urls import path
from netWorth import views

urlpatterns = [
    path('', views.calculate_net_worth),


]
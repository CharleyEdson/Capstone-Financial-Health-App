from django.urls import path
from netWorth import views

urlpatterns = [
    path('', views.networthinfo),
    path('<int:pk>/', views.edit_networth)

]
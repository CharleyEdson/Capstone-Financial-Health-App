from django.urls import path
from Income import views

urlpatterns = [
    path('', views.incomeinfo)
]
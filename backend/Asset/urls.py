from django.urls import path
from Asset import views

urlpatterns = [
    path('', views.assetinfo),

]
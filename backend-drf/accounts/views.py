from django.shortcuts import render
from .serializers import *
from rest_framework import generics
from django.contrib.auth.models import User

# Create your views here.

class Register_view(generics.CreateAPIView):
    queryset=User.objects.all()
    serializer_class=User_serializer
    permission_classes=[]
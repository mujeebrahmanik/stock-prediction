from django.shortcuts import render
from .serializers import *
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.

class Register_view(generics.CreateAPIView):
    queryset=User.objects.all()
    serializer_class=User_serializer
    permission_classes=[]
    
    
class Protected_view(APIView):
    permission_classes=[IsAuthenticated]
    
    def get(self,request):
        
        response={
            'message':'request was permitted'
        }
        
        return Response(response)
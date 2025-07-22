from django.contrib.auth.models import User
from rest_framework import serializers


class User_serializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True,min_length=8,style={'input_type':'password'})
    class Meta:
        model=User
        fields=['username','email','password']
        
    def create(self, validated_data):
        # when we use  user.objects.create_user   it will auto hash the password 
        user=User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )
        
        return user
        
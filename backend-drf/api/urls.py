from django.urls import path
from accounts import views as user_views
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView


urlpatterns=[
    path('register/',user_views.Register_view.as_view(),name='register'),
    
    # jwt
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    path('protected/',user_views.Protected_view.as_view(),name='protected')
]
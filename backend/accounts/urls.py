from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet

router = DefaultRouter()
router.register(r'', UserViewSet) # Empty string because the prefix is in the main URL

urlpatterns = [
    path('', include(router.urls)),
]
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PlacementViewSet

# We create a router specifically for this app
router = DefaultRouter()
router.register(r'', PlacementViewSet, basename='placement')

urlpatterns = [
    path('', include(router.urls)),
]
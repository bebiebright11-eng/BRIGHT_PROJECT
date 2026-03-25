from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PlacementViewSet, WeeklyLogViewSet

router = DefaultRouter()
router.register(r'placements', PlacementViewSet, basename='placement')
router.register(r'logs', WeeklyLogViewSet, basename='weeklylog') # Add this line

urlpatterns = [
    path('', include(router.urls)),
]
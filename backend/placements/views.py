from rest_framework import viewsets
from .models import InternshipPlacement
from .serializers import PlacementSerializer

class PlacementViewSet(viewsets.ModelViewSet):
    queryset = InternshipPlacement.objects.all()
    serializer_class = PlacementSerializer

from rest_framework import viewsets
from .models import InternshipPlacement
from .serializers import PlacementSerializer

class PlacementViewSet(viewsets.ModelViewSet):
    serializer_class = PlacementSerializer

    def get_queryset(self):
        # This is the "Magic" part
        user = self.request.user
        
        # If the user is a student, only show THEIR placement
        if hasattr(user, 'role') and user.role == 'student':
            return InternshipPlacement.objects.filter(student=user)
        
        # If they are an Admin or Academic Supervisor, show everything
        return InternshipPlacement.objects.all()
    
class WeeklyLogViewSet(viewsets.ModelViewSet):
    queryset = WeeklyLog.objects.all()
    serializer_class = WeeklyLogSerializer

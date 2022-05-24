from .models import Issue
from .serializers import IssueSerializer
from rest_framework import viewsets

# Create your views here.

class IssueListCreate(viewsets.ModelViewSet):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer

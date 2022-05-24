from .models import Issue
from .serializers import IssueSerializer
from rest_framework import generics

# Create your views here.

class IssueListCreate(generics.ListCreateAPIView):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer

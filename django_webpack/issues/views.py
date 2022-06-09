from .models import Issue
from .serializers import IssueSerializer
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import CreateIssueSerializer

# Create your views here.


class IssueView(generics.ListAPIView):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer


class CreateIssue(APIView):
    serializer_class = CreateIssueSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            title = serializer.data.get("title")
            description = serializer.data.get("description")
            priority = serializer.data.get("priority")
            issue_type = serializer.data.get("issue_type")
            created_by = serializer.data.get('created_by')
            host = self.request.session.session_key
            queryset = Issue.objects.filter(host=host)
            if queryset.exists():
                issue = queryset[0]
                issue.title = title
                issue.description = description
                issue.priority = priority
                issue.issue_type = issue_type
                issue.created_by = created_by
                issue.save(update_fields=['title', 'description', 'priority',
                                          'issue_type', 'created_by'])
            else:
                issue = Issue(title=title, host=host, description=description,
                              priority=priority, issue_type=issue_type, created_by=created_by)
                issue.save()
        return Response(IssueSerializer(issue).data, status=status.HTTP_200_OK)

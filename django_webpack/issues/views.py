from .models import Issue
from issues.serializers import IssueSerializer
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from issues.serializers import CreateIssueSerializer
from rest_framework import permissions

# Create your views here.


class IssueUserWritePermission(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the snippet.
        return obj.created_by == request.user


class IssueView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer


class IssueDetail(generics.RetrieveUpdateDestroyAPIView, IssueUserWritePermission):
    permission_classes = [IssueUserWritePermission]
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer


class CreateIssue(generics.CreateAPIView, IssueUserWritePermission):
    permission_classes = [IssueUserWritePermission]
    serializer_class = CreateIssueSerializer
    queryset = Issue.objects.all()


class EditIssue(generics.UpdateAPIView, IssueUserWritePermission):
    permission_classes = [IssueUserWritePermission]
    serializer_class = IssueSerializer
    queryset = Issue.objects.all()


class DeleteIssue(generics.RetrieveDestroyAPIView, IssueUserWritePermission):
    permission_classes = [IssueUserWritePermission]
    serializer_class = IssueSerializer
    queryset = Issue.objects.all()

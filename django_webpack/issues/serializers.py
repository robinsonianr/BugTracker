from rest_framework import serializers
from issues.models import Issue


class IssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issue
        fields = ('id', 'title', 'description', 'priority', 'issue_type',
                  'date_added', 'created_by')


class CreateIssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issue
        fields = ('title', 'description', 'priority',
                  'issue_type', 'created_by')

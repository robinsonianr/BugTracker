from xml.etree.ElementInclude import include
from django.urls import path, include
from .views import IssueView, CreateIssue


urlpatterns = [
    path('api/issue', IssueView.as_view()),
    path('api/create-issue', CreateIssue.as_view()),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

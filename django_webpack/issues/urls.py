from django.urls import path
from issues.views import IssueView, CreateIssue, DeleteIssue, EditIssue, IssueDetail


urlpatterns = [
    path('', IssueView.as_view()),
    path('create/', CreateIssue.as_view(), name='createissue'),
    path('edit/issuedetail/<int:pk>/', IssueDetail.as_view(), name='issuedetail'),
    path('edit/<int:pk>/', EditIssue.as_view(), name='editissue'),
    path('delete/<int:pk>/', DeleteIssue.as_view(), name='deleteissue'),

]

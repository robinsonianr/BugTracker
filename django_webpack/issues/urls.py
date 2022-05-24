from django.urls import path
from . import views

urlpatterns = [
    path('api/issue/', views.IssueListCreate.as_view()),
]
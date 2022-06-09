from django.urls import path
from .views import index

# All urls will point to same HTML template because it is SPA application
urlpatterns = [
    path('', index),
    path('create-issue', index),
    path('issues', index),
]

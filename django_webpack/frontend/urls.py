from django.urls import path
from .views import index

# All urls will point to same HTML template because it is SPA application
urlpatterns = [
    path('', index),
    path('create', index),
    path('issues', index),
    path('login', index),
    path('register', index),
    path('edit/<int:pk>', index),
    path('users', index),
]

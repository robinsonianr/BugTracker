from xml.etree.ElementInclude import include
from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'user' ,views.IssueListCreate)

urlpatterns = [
    #path('api/issue/', views.IssueListCreate.as_view()),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
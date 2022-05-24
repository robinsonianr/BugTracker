from django.db import models

from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.
PRIORITIES = (('critical', 'Critical'),
              ('high', 'High'),
              ('medium', 'medium'),
              ('low', 'Low'))

Types = (('bug', 'Bug'),
         ('feature', 'Feature'))


class Issue(models.Model):
    title = models.CharField(max_length=64, default=' ', blank=False)
    description = models.TextField(blank=False)
    priority = models.CharField(max_length=8, choices=PRIORITIES, default='low')
    issue_type = models.CharField(max_length=7, choices=Types, default='bug')
    date_added = models.DateTimeField(default=timezone.now)
    created_by = models.CharField(max_length=32, default=' ')


    def __str__(self):
        return self.title


class Comment(models.Model):
    issue = models.ForeignKey('issues.Issue', on_delete=models.CASCADE, related_name='comments')
    author = models.CharField(max_length=32)
    text = models.CharField(max_length=512)
    created_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.text
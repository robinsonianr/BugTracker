from tkinter import CASCADE
from django.conf import settings
from django.db import models

from django.utils import timezone
import string
import random

# Create your models here.


class Issue(models.Model):

    PRIORITIES = (('critical', 'Critical'),
                  ('high', 'High'),
                  ('medium', 'medium'),
                  ('low', 'Low'))

    Types = (('bug', 'Bug'),
             ('feature', 'Feature'))

    title = models.CharField(
        max_length=64, default="", blank=False)
    description = models.TextField(blank=False)
    priority = models.CharField(
        max_length=8, choices=PRIORITIES, default='low')
    issue_type = models.CharField(max_length=7, choices=Types, default='bug')
    date_added = models.DateTimeField(default=timezone.now)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="issues")

    def __str__(self):
        return self.title

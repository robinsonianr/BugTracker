from django.contrib import admin
from .models import Issue
# Register your models here.


@admin.register(Issue)
class IssueAdmin(admin.ModelAdmin):
    date_hierarchy = 'date_added'
    list_filter = ('priority', 'created_by')
    list_display = ('id', 'title', 'description', 'created_by',
                    'priority', 'issue_type')
    search_fields = ['title', 'priority']

from django.contrib import admin
from .models import Issue, Comment
# Register your models here.


class IssueAdmin(admin.ModelAdmin):
    date_hierarchy = 'date_added'
    list_filter = ('priority', 'created_by')
    list_display = ('id', 'title', 'description', 'priority', 'issue_type', 'created_by')
    search_fields = ['title', 'priority']


admin.site.register(Issue, IssueAdmin)
admin.site.register(Comment)
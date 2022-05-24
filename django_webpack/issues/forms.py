from django import forms
from django.forms import ModelForm
from django.utils.translation import gettext_lazy as _
from .models import Issue, Comment


class IssueForm(ModelForm):
    class Meta:
        model = Issue
        fields = ['title', 'description', 'priority', 'issue_type']
        labels = {
            'issue_type': _('Issue Type'),
        }


class CommentForm(ModelForm):
    text = forms.CharField(widget=forms.Textarea, label='')

    class Meta:
        model = Comment
        fields = ['text']
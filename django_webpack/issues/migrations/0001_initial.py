# Generated by Django 4.0.4 on 2022-05-24 16:58

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Issue',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default=' ', max_length=64)),
                ('description', models.TextField()),
                ('priority', models.CharField(choices=[('critical', 'Critical'), ('high', 'High'), ('medium', 'medium'), ('low', 'Low')], default='low', max_length=8)),
                ('issue_type', models.CharField(choices=[('bug', 'Bug'), ('feature', 'Feature')], default='bug', max_length=7)),
                ('date_added', models.DateTimeField(default=django.utils.timezone.now)),
                ('created_by', models.CharField(default=' ', max_length=32)),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author', models.CharField(max_length=32)),
                ('text', models.CharField(max_length=512)),
                ('created_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('issue', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='issues.issue')),
            ],
        ),
    ]

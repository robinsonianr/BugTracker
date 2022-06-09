# Generated by Django 4.0.4 on 2022-05-25 21:48

from django.db import migrations, models
import issues.models


class Migration(migrations.Migration):

    dependencies = [
        ('issues', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='issue',
            name='title',
            field=models.CharField(default=issues.models.generate_unique_code, max_length=64),
        ),
    ]

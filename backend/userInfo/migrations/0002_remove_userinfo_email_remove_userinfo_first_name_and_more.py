# Generated by Django 4.1.5 on 2023-01-14 20:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('userInfo', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userinfo',
            name='email',
        ),
        migrations.RemoveField(
            model_name='userinfo',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='userinfo',
            name='last_name',
        ),
    ]

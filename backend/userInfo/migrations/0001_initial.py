# Generated by Django 4.1.5 on 2023-01-10 20:31

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Asset', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Liability', '0001_initial'),
        ('Income', '0001_initial'),
        ('Expense', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='userInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=50)),
                ('phone_number', models.CharField(max_length=50)),
                ('age', models.IntegerField()),
                ('gender', models.CharField(max_length=50)),
                ('occupation', models.CharField(max_length=50)),
                ('risk_level', models.IntegerField()),
                ('state_living_in', models.CharField(max_length=50)),
                ('relationship_status', models.CharField(max_length=50)),
                ('budget_value', models.IntegerField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('user_monthly_assets', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Asset.asset')),
                ('user_monthly_expenses', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Expense.expense')),
                ('user_monthly_incomes', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Income.income')),
                ('user_monthly_liabilities', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Liability.liability')),
            ],
        ),
    ]

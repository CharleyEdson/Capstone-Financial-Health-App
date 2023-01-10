# Generated by Django 4.1.5 on 2023-01-10 20:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Asset', '0001_initial'),
        ('Liability', '0001_initial'),
        ('Expense', '0001_initial'),
        ('Income', '0001_initial'),
        ('userInfo', '0002_alter_userinfo_user_monthly_assets_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinfo',
            name='user_monthly_assets',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Asset.asset'),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='user_monthly_expenses',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Expense.expense'),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='user_monthly_incomes',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Income.income'),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='user_monthly_liabilities',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Liability.liability'),
        ),
    ]

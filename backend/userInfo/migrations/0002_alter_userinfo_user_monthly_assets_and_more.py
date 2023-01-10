# Generated by Django 4.1.5 on 2023-01-10 20:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Expense', '0001_initial'),
        ('Asset', '0001_initial'),
        ('Liability', '0001_initial'),
        ('Income', '0001_initial'),
        ('userInfo', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinfo',
            name='user_monthly_assets',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='Asset.asset'),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='user_monthly_expenses',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='Expense.expense'),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='user_monthly_incomes',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='Income.income'),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='user_monthly_liabilities',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='Liability.liability'),
        ),
    ]

# Generated by Django 4.1.6 on 2023-02-26 18:03

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gestionPersonnel', '0004_alter_employe_dateajout'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employe',
            name='dateAjout',
            field=models.DateTimeField(default=datetime.datetime(2023, 2, 26, 18, 3, 50, 303243, tzinfo=datetime.timezone.utc)),
        ),
    ]

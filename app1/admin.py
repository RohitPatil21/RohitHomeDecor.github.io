from django.contrib import admin
from app1.models import Contact

# Register your models here.

admin.site.register(Contact)


from django.contrib.admin.models import LogEntry

LogEntry.objects.all().delete()



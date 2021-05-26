from rest_framework import serializers 
from files.models import File

class FileSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = File
        fields = ('id',
                  'name',
                  'document',
                  'size',
                  'path',
                  'type',
                  'timestamp')
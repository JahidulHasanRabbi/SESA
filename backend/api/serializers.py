from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import User, Product, ProdcutReview

class LoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=250)
    class Meta:
        model = User
        fields = ['username', 'password']

#register User
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        return  User.objects.create_user(**validated_data)

class StaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']

    def create(self, validated_data):
        return User.objects.create_staff(**validated_data)



class ProductSerializer(serializers.ModelSerializer):

    

    class Meta:
        model = Product
        fields = ['id','product_name', 'brand', 'main_catagory', 'catagory', 'stock', 'image', 'price']


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'firstname', 'lastname', 'email', 'date_joined']

class ProductViewSerializer(serializers.ModelSerializer):
    img_url = serializers.SerializerMethodField()

    def get_img_url(self, obj):
        return self.context['request'].build_absolute_uri(obj.image.url)
    class Meta:
        model = Product
        fields = '__all__'

class ProdcutReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProdcutReview
        fields = '__all__'

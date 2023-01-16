from django.contrib.auth import authenticate
from rest_framework.generics import ListAPIView, ListCreateAPIView, CreateAPIView
from rest_framework.decorators import api_view, permission_classes
from .serializers import ProductViewSerializer, UserSerializer, LoginSerializer, ProfileSerializer, ProductSerializer, ProductViewSerializer, StaffSerializer, ProdcutReviewSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import views, status, filters
from rest_framework.parsers import MultiPartParser, FormParser, FileUploadParser
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Product, ProdcutReview
from .permission import IsStaff

#Mannuly Token Generate
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


class ProdcutAddView(ListCreateAPIView):
    permission_classes = [IsAuthenticated,  ]
    parser_classes = [MultiPartParser, FormParser,]
    def post(self, request):
        print(request.data)
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            proudct = serializer.save()
            print(serializer.data)
            return Response({"Meg":{"New Product Added":serializer.data}},status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors ,status=status.HTTP_417_EXPECTATION_FAILED)

class UserRegisterView(ListCreateAPIView):
    permission_classes = (AllowAny, )
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token = get_tokens_for_user(user)
            return Response({'token' : token, 'Message': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

       
class UserLoginView(views.APIView):
    permission_classes = (AllowAny,) 
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            print(serializer.data)
            username = serializer.data.get('username')
            password = serializer.data.get('password')
            print(username, password)
            user = authenticate(username=username, password= password)
            if user is not None:
                token = get_tokens_for_user(user)
                return Response({'Token' : token, 'msg': 'Login Sucess'}, status=status.HTTP_200_OK)
            else:
                return Response({'error': {
                    'none_field_error': ['email or password is not valid']}},
                    status=status.HTTP_404_NOT_FOUND)
        else:
            print(serializer.errors)
            return Response({'meg': "hello"}, status=status.HTTP_400_BAD_REQUEST)

class StaffRegisterView(ListCreateAPIView):
    permission_classes = (AllowAny, )
    def post(self, request):
        serializer = StaffSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token = get_tokens_for_user(user)
            return Response({'token' : token, 'Message': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StaffLoginView(views.APIView):
    permission_classes = (AllowAny,) 
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            print(serializer.data)
            username = serializer.data.get('username')
            password = serializer.data.get('password')
            print(username, password)
            user = authenticate(username=username, password= password)
            if user is not None and user.is_staff == True:
                token = get_tokens_for_user(user)
                return Response({'Token' : token, 'msg': 'Login Sucess'}, status=status.HTTP_200_OK)
            else:
                return Response({'error': {
                    'none_field_error': ['email or password is not valid']}},
                    status=status.HTTP_404_NOT_FOUND)
        else:
            print(serializer.errors)
            return Response({'meg': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

        

class UserProfileView(views.APIView):
    permission_classes = (IsAuthenticated,) 
    def get(self, request):
        serializer = ProfileSerializer(request.user)
        print(serializer.data)
        return Response(serializer.data, status=status.HTTP_200_OK)

class ProductSortView(views.APIView):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny,]

    def post(self, request):
        data = request.data
        print(request.data, "hlee")
        if 'catagory' not in data:
            catagory = data.get('main_catagory')
            queryset = Product.objects.filter(main_catagory=catagory)
            serializer = ProductViewSerializer(queryset ,context={'request': request}, many=True)
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_200_OK)
        elif 'catagory' in data:
            maincatagory = data.get('main_catagory')
            catagory = data.get('catagory')
            queryset = Product.objects.filter(main_catagory=maincatagory).filter(catagory=catagory)
            serializer = ProductViewSerializer(queryset ,context={'request': request}, many=True)
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response("error", status=status.HTTP_304_NOT_MODIFIED)
    def get(self, request):
        queryset = Product.objects.all()
        serializer = ProductViewSerializer(queryset,context={'request': request}, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class ProductDetailsView(views.APIView):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny,]

    def post(self, request):
        id = request.data.get('id')
        print(request.data)
        queryset = Product.objects.get(id=id)
        serializer = ProductViewSerializer(queryset,context={'request': request},)
        print(serializer.data)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ProdcutReviewView(CreateAPIView):
    permission_classes = (IsAuthenticated,)
    parser_classes = [MultiPartParser, FormParser, FileUploadParser]

    def post(self, request):
        serializer = ProdcutReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"Review Added":serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response("ERORR", status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ProductReviewshowView(views.APIView):
    serializer_class = ProdcutReviewSerializer
    permission_classes = [AllowAny,]

    def get(self, request):
        product = request.data.get('product_id')
        queryset = ProdcutReview.objects.filter(product=product)
        serializer = ProdcutReviewSerializer(queryset , many=True)
        print(serializer.data)
        return Response(serializer.data, status=status.HTTP_200_OK)

class home(views.APIView):
    permission_classes = (IsAuthenticated, IsStaff)
    def post(self, request):
        return Response("OK", status=status.HTTP_200_OK)
    
        
class SerachView(ListAPIView):
    permission_classes = (AllowAny,)
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ['product_name', 'brand']
    

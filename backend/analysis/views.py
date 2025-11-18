from rest_framework.decorators import api_view
from rest_framework.response import Response
from .utils import parse_query_and_area, generate_summary, generate_chart_data, get_area_df
@api_view(['POST'])
def analyze(request):
    query = request.data.get('area', '') or request.data.get('query', '')
    area = parse_query_and_area(query)
    summary = generate_summary(area)
    chart = generate_chart_data(area)
    table = get_area_df(area).to_dict(orient='records')
    return Response({'summary': summary, 'chart': chart, 'table': table})

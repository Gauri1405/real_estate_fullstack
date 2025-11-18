import pandas as pd
import re

DATA_PATH = "analysis/sample_data.xlsx"

def load_data():
    df = pd.read_excel(DATA_PATH)
    df.columns = [str(c).strip() for c in df.columns]  # normalize
    return df

def parse_query_and_area(query):
    df = load_data()
    areas = df['final location'].astype(str).unique().tolist()
    q = str(query).lower()

    for a in areas:
        if a.lower() in q:
            return a

    return areas[0] if len(areas) > 0 else ""

def get_area_df(area):
    df = load_data()

    required = ['final location', 'year', 'flat - weighted average rate', 'total sold - igr']
    for col in required:
        if col not in df.columns:
            raise Exception(f"❌ Dataset missing column: {col}")

    if area:
        df = df[df['final location'].str.lower() == area.lower()]

    return df.sort_values("year")

def generate_summary(area):
    df = get_area_df(area)

    years = df['year'].astype(int).tolist()
    prices = df['flat - weighted average rate'].astype(float).tolist()
    demands = df['total sold - igr'].astype(float).tolist()

    if len(prices) < 1:
        return f"No data for {area}"

    price_change = ((prices[-1] - prices[0]) / prices[0]) * 100 if len(prices) > 1 else 0
    avg_demand = sum(demands) / len(demands) if demands else 0

    return (
        f"📊 **Market Summary for {area}:**\n"
        f"- Price changed **{price_change:.1f}%** from {years[0]} to {years[-1]}\n"
        f"- Average demand (units sold): **{avg_demand:.1f}**"
    )

def generate_chart_data(area):
    df = get_area_df(area)

    chart = []
    for _, row in df.iterrows():
        chart.append({
            "year": int(row["year"]),
            "price": float(row["flat - weighted average rate"]),
            "demand": float(row["total sold - igr"])
        })
    return chart

import numpy as np
import pandas as pd

dataset = pd.read_csv("raw_dataset.csv")
clean_dataset = dataset[['Country', 'Year', 'Value', 'Continent']]

df = pd.DataFrame(clean_dataset)
country_list = df.Country.unique()
print(country_list)
europe_country = df[df['Continent'] == 'Europe']
europe_country = europe_country['Country'].unique()
asia_country = df[df['Continent'] == 'Asia/Oceania']
asia_country = asia_country['Country'].unique()
america_country = df[df['Continent'] == 'America']
america_country = america_country['Country'].unique()
africa_country = df[df['Continent'] == 'Africa']
africa_country = africa_country['Country'].unique()
# print(len(country_list))

first_year = []
final_year = []
for country in country_list:
    tmp = df[df['Country'] == str(country)]
    first_year.append(np.min(tmp['Year']))
    final_year.append(np.max(tmp['Year']))

year_from = np.max(first_year)
year_to = np.min(final_year)
year_from_10_years = year_to - 9
year_from_20_years = year_to - 19
# print(year_from, ' to ', year_to)

for i in range(0, len(country_list)):
    tmp = df[(df.Country == str(country_list[i])) & (df.Year >= year_from) & (df.Year <= year_to)]
    tmp = tmp[['Year', 'Value']]
    tmp.to_csv('processed_dataset/' + str(country_list[i]) + '.csv', index = False)

for i in range(0, len(country_list)):
    tmp = df[(df['Country'] == str(country_list[i])) & (df['Year'] >= year_from_10_years) & (df.Year <= year_to)]
    tmp = tmp[['Year', 'Value']]
    tmp.to_csv('processed_dataset/' + str(country_list[i]) + '_0615.csv', index = False)

for i in range(0, len(country_list)):
    tmp = df[(df['Country'] == str(country_list[i])) & (df['Year'] >= year_from_20_years) & (df.Year <= year_to)]
    tmp = tmp[['Year', 'Value']]
    tmp.to_csv('processed_dataset/' + str(country_list[i]) + '_9615.csv', index = False)
    
data = {'Country': [], 'Continent': [], 'Average': []}

europe_data = {'Country': [], 'Continent': [], 'Average': []}

asia_data = {'Country': [], 'Continent': [], 'Average': []}

africa_data = {'Country': [], 'Continent': [], 'Average': []}

america_data = {'Country': [], 'Continent': [], 'Average': []}

data_10_years = {'Country' : [], 'Continent': [], 'Average': []}

europe_data_10 = {'Country': [], 'Continent': [], 'Average': []}

asia_data_10 = {'Country': [], 'Continent': [], 'Average': []}

africa_data_10 = {'Country': [], 'Continent': [], 'Average': []}

america_data_10 = {'Country': [], 'Continent': [], 'Average': []}

data_20_years = {'Country' : [], 'Continent': [], 'Average': []}

europe_data_20 = {'Country': [], 'Continent': [], 'Average': []}

asia_data_20 = {'Country': [], 'Continent': [], 'Average': []}

africa_data_20 = {'Country': [], 'Continent': [], 'Average': []}

america_data_20 = {'Country': [], 'Continent': [], 'Average': []}

for country in country_list:
    tmp = df[(df['Country'] == str(country)) & (df['Year'] >= year_from) & (df['Year'] <= year_to)]
    data['Country'].append(str(country))
    data['Continent'].append(tmp['Continent'].iloc[0])
    data['Average'].append(np.around(np.mean(tmp['Value']), decimals=1))

for country in europe_country:
    tmp = df[(df['Country'] == str(country)) & (df['Year'] >= year_from) & (df['Year'] <= year_to)]
    europe_data['Country'].append(str(country))
    europe_data['Continent'].append('Europe')
    europe_data['Average'].append(np.around(np.mean(tmp['Value']), decimals=1))

for country in asia_country:
    tmp = df[(df['Country'] == str(country)) & (df['Year'] >= year_from) & (df['Year'] <= year_to)]
    asia_data['Country'].append(str(country))
    asia_data['Continent'].append('Asia/Oceania')
    asia_data['Average'].append(np.around(np.mean(tmp['Value']), decimals=1))

for country in africa_country:
    tmp = df[(df['Country'] == str(country)) & (df['Year'] >= year_from) & (df['Year'] <= year_to)]
    africa_data['Country'].append(str(country))
    africa_data['Continent'].append('Africa')
    africa_data['Average'].append(np.around(np.mean(tmp['Value']), decimals=1))

for country in america_country:
    tmp = df[(df['Country'] == str(country)) & (df['Year'] >= year_from) & (df['Year'] <= year_to)]
    america_data['Country'].append(str(country))
    america_data['Continent'].append('America')
    america_data['Average'].append(np.around(np.mean(tmp['Value']), decimals=1))

for country in country_list:
    tmp = df[(df['Country'] == str(country)) & (df['Year'] >= year_from_10_years) & (df['Year'] <= year_to)]
    data_10_years['Country'].append(str(country))
    data_10_years['Continent'].append(tmp['Continent'].iloc[0])
    data_10_years['Average'].append(np.around(np.mean(tmp['Value']), decimals=1))

for country in europe_country:
    tmp = df[(df['Country'] == str(country)) & (df['Year'] >= year_from_10_years) & (df['Year'] <= year_to)]
    europe_data_10['Country'].append(str(country))
    europe_data_10['Continent'].append('Europe')
    europe_data_10['Average'].append(np.around(np.mean(tmp['Value']), decimals=1))

for country in asia_country:
    tmp = df[(df['Country'] == str(country)) & (df['Year'] >= year_from_10_years) & (df['Year'] <= year_to)]
    asia_data_10['Country'].append(str(country))
    asia_data_10['Continent'].append('Asia/Oceania')
    asia_data_10['Average'].append(np.around(np.mean(tmp['Value']), decimals=1))

for country in africa_country:
    tmp = df[(df['Country'] == str(country)) & (df['Year'] >= year_from_10_years) & (df['Year'] <= year_to)]
    africa_data_10['Country'].append(str(country))
    africa_data_10['Continent'].append('Africa')
    africa_data_10['Average'].append(np.around(np.mean(tmp['Value']), decimals=1))

for country in america_country:
    tmp = df[(df['Country'] == str(country)) & (df['Year'] >= year_from_10_years) & (df['Year'] <= year_to)]
    america_data_10['Country'].append(str(country))
    america_data_10['Continent'].append('America')
    america_data_10['Average'].append(np.around(np.mean(tmp['Value']), decimals=1))

for country in country_list:
    tmp = df[(df['Country'] == str(country)) & (df['Year'] >= year_from_20_years) & (df['Year'] <= year_to)]
    data_20_years['Country'].append(str(country))
    data_20_years['Continent'].append(tmp['Continent'].iloc[0])
    data_20_years['Average'].append(np.around(np.mean(tmp['Value']), decimals=1))

for country in europe_country:
    tmp = df[(df['Country'] == str(country)) & (df['Year'] >= year_from_20_years) & (df['Year'] <= year_to)]
    europe_data_20['Country'].append(str(country))
    europe_data_20['Continent'].append('Europe')
    europe_data_20['Average'].append(np.around(np.mean(tmp['Value']), decimals=1))

for country in asia_country:
    tmp = df[(df['Country'] == str(country)) & (df['Year'] >= year_from_20_years) & (df['Year'] <= year_to)]
    asia_data_20['Country'].append(str(country))
    asia_data_20['Continent'].append('Asia/Oceania')
    asia_data_20['Average'].append(np.around(np.mean(tmp['Value']), decimals=1))

for country in africa_country:
    tmp = df[(df['Country'] == str(country)) & (df['Year'] >= year_from_20_years) & (df['Year'] <= year_to)]
    africa_data_20['Country'].append(str(country))
    africa_data_20['Continent'].append('Africa')
    africa_data_20['Average'].append(np.around(np.mean(tmp['Value']), decimals=1))

for country in america_country:
    tmp = df[(df['Country'] == str(country)) & (df['Year'] >= year_from_20_years) & (df['Year'] <= year_to)]
    america_data_20['Country'].append(str(country))
    america_data_20['Continent'].append('America')
    america_data_20['Average'].append(np.around(np.mean(tmp['Value']), decimals=1))

if((len(data['Country']) == len(data['Average'])) & (len(data_10_years['Country']) == len(data_10_years['Average']))):
    df_average = pd.DataFrame(data)
    df_average.to_csv('processed_dataset/average_alcohol_consumption_total.csv', index=False)

    df_average_0615 = pd.DataFrame(data_10_years)
    df_average_0615.to_csv('processed_dataset/average_alcohol_consumption_0615.csv', index=False)

    df_average_9615 = pd.DataFrame(data_20_years)
    df_average_9615.to_csv('processed_dataset/average_alcohol_consumption_9615.csv', index=False)

    df_europe = pd.DataFrame(europe_data)
    df_europe.to_csv('processed_dataset/europe_alcohol.csv', index=False)

    df_asia = pd.DataFrame(asia_data)
    df_asia.to_csv('processed_dataset/asia_alcohol.csv', index=False)

    df_america = pd.DataFrame(america_data)
    df_america.to_csv('processed_dataset/america_alcohol.csv', index=False)

    df_africa = pd.DataFrame(africa_data)
    df_africa.to_csv('processed_dataset/africa_alcohol.csv', index=False)

    df_europe_10 = pd.DataFrame(europe_data_10)
    df_europe_10.to_csv('processed_dataset/europe_alcohol_0615.csv', index=False)

    df_asia_10 = pd.DataFrame(asia_data_10)
    df_asia_10.to_csv('processed_dataset/asia_alcohol_0615.csv', index=False)

    df_america_10 = pd.DataFrame(america_data_10)
    df_america_10.to_csv('processed_dataset/america_alcohol_0615.csv', index=False)

    df_africa_10 = pd.DataFrame(africa_data_10)
    df_africa_10.to_csv('processed_dataset/africa_alcohol_0615.csv', index=False)

    df_europe_20 = pd.DataFrame(europe_data_20)
    df_europe_20.to_csv('processed_dataset/europe_alcohol_9615.csv', index=False)

    df_asia_20 = pd.DataFrame(asia_data_20)
    df_asia_20.to_csv('processed_dataset/asia_alcohol_9615.csv', index=False)

    df_america_20 = pd.DataFrame(america_data_20)
    df_america_20.to_csv('processed_dataset/america_alcohol_9615.csv', index=False)

    df_africa_20 = pd.DataFrame(africa_data_20)
    df_africa_20.to_csv('processed_dataset/africa_alcohol_9615.csv', index=False)
# print(df_average)

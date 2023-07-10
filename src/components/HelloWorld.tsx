import { useCountriesQuery, useSpacexQuery } from '../apollo/useApollo';
import { GetCountriesDocument } from './graphql/operations.countries.generated';
import { GetLaunchesDocument } from './graphql/operations.spacex.generated';

export const HelloWorld = () => {
  const { data: launchesData, loading: launchesLoading } = useSpacexQuery(GetLaunchesDocument, {
    variables: {
      limit: 5
    }
  });

  const { data: countriesData, loading: countriesLoading } = useCountriesQuery(GetCountriesDocument, {
    variables: {
      filter: {
        continent: {
          eq: 'OC'
        }
      }
    }
  });

  return (
    <>
      <h1>SpaceX Launches</h1>
      {launchesLoading && <p>Loading...</p>}
      {launchesData && (
        <ul>
          {launchesData.launches?.map((launch) => (
            <li key={launch?.launch_date_utc}>
              <p>
                <strong>{launch?.rocket?.rocket?.name}</strong>
                <br />
                {launch?.launch_date_utc}
              </p>
            </li>
          ))}
        </ul>
      )}

      <h1>Oceania countries</h1>
      {countriesLoading && <p>Loading...</p>}
      {countriesData && (
        <ul>
          {countriesData.countries?.map((country) => (
            <li key={country?.code}>
              <p>
                <strong>{country?.name}</strong> - {country?.emoji}
                <br />
                {country?.code}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

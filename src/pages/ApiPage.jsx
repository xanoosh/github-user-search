import { useForm } from 'react-hook-form';
import FormErrors from '../components/FormErrors';
import { useProjects } from '../hooks/useProjects';
import SingleGithubProject from '../components/SingleGithubProject';
import Loading from '../components/Loading';
import { useState } from 'react';

export default function ApiPage() {
  const [loginValue, setLoginValue] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { login: loginValue } });
  const { data, isLoading } = useProjects({
    login: loginValue,
    enabled: loginValue.length > 0,
  });

  const onSubmit = (data) => {
    setLoginValue(data.login);
  };

  return (
    <>
      <p className="section-container__description">Github API</p>
      <form
        autoComplete="off"
        className="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form__group">
          <label className="form__group__label" htmlFor="login">
            Github login
          </label>
          <input
            id="login"
            className="form__group__input"
            {...register('login', {
              required: 'This field is required',
            })}
          />
          <FormErrors errors={errors} />
        </div>
        <button className="form__submit" type="submit">
          Find repositories
        </button>
      </form>
      {isLoading ? (
        <Loading />
      ) : data?.length ? (
        <div className="projects-container">
          {data.map((project) => (
            <SingleGithubProject
              key={project.id}
              projectData={project}
              loginValue={loginValue}
            />
          ))}
        </div>
      ) : Array.isArray(data) ? (
        <div className="result-info">
          <span className="result-info__text">
            <span className="result-info__text--highlighted">{loginValue}</span>{' '}
            has no public projects available
          </span>
        </div>
      ) : null}
    </>
  );
}

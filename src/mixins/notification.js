import iziToast from 'izitoast';

// eslint-disable-next-line import/prefer-default-export
export const notification = (message, type, timeout = 5000) => {
  const show = iziToast;
  const options = {
    message,
    position: 'topRight',
    timeout,
    maxWidth: 450,
    drag: false,
  };
  function notify(toast) {
    const tipo = {
      success: () => show.success({ title: 'Sucesso!', ...options }),
      warning: () => show.warning({ title: 'Aviso!', ...options }),
      error: () => show.error({ title: 'Erro!', ...options }),
      info: () => show.info({ title: 'Atenção!', ...options }),
      default: () => show.info({ title: 'Atenção!', ...options }),
    };
    return (tipo[toast] || tipo.default)();
  }
  notify(type);
};

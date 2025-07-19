import axios from 'axios';

const ACCESS_TOKEN = 'SUA_CHAVE_API'; // token gerado no site do Vimeo

export const buscarVideosVimeo = async (query) => {
  try {
    const resposta = await axios.get('https://api.vimeo.com/videos', {
      params: {
        query: query,
        per_page: 10,
        sort: 'relevant',
        direction: 'desc'
      },
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return resposta.data.data; // os vídeos estão aqui
  } catch (erro) {
    console.error('Erro ao buscar vídeos no Vimeo:', erro);
    throw erro;
  }
};

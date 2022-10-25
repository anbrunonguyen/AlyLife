import { Toast } from '@capacitor/toast';

export const showSuccessToast = async () => {
  await Toast.show({
    text: 'Thành công rồi!',
    position: 'top',
  });
};

import styled from 'styled-components/native';
import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const CategoryContainer = styled.TouchableOpacity`
  margin-left: 24px;
  align-items: center;
`;

export const Icon = styled.View`
  background: #fff;
  height: 66px;
  width: 66px;
  border-radius: 33px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
`;

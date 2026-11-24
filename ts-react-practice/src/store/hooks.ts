import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// use these two everywhere instead of plain useDispatch / useSelector
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
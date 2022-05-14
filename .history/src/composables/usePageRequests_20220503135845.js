import { reactive } from 'vue';

export default function usePageRequests() {
  const activityRequests = reactive({ target: [] });
  const isLoading = computed(() => !!activityRequests.length);
  return { isLoading };
}

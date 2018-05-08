<template>
    <div>
        <h1
            class="heading"
            :class="cssClasses"
        />
    </div>
</template>

<script>
const testVeryLongMethodName = () => {};

testVeryLongMethodName(
    testVeryLongMethodName,
    testVeryLongMethodName,
    testVeryLongMethodName,
);

export default {
    data: () => ({
        cssClasses: "heading--dark",
    }),
};
</script>
